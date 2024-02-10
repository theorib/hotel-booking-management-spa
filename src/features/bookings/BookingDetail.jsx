import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import useBooking from './useBooking';
import { useNavigate } from 'react-router';
import Spinner from '../../ui/Spinner';

import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2';
import useCheckOut from '../check-in-out/useCheckOut';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useDeleteBooking from './useDeleteBooking';
import Empty from '../../ui/Empty';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking, error } = useBooking();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { isDeletingBooking, deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  if (error && error?.message === 'Booking not found') {
    navigate('/error');
  }

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare />}
            disabled={isCheckingOut}
            onClick={() => {
              if (status === 'checked-in') checkOut(bookingId);
            }}
          >
            <span>Check Out</span>
          </Button>
        )}
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            <span>Check in</span>
          </Button>
        )}
        <Modal>
          <Modal.Open opensWindow="booking-delete">
            <Button variation="danger" icon={<HiTrash />}>
              <span>Delete Booking</span>
            </Button>
          </Modal.Open>

          <Modal.Window windowName="booking-delete">
            <Modal.Close />
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() => {
                deleteBooking(bookingId, {
                  onSettled: () => {
                    navigate('/bookings');
                  },
                });
              }}
              disabled={isDeletingBooking}
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
