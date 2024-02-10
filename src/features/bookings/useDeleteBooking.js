import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import { useNavigate } from 'react-router';

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: bookingId => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success('Booking deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
        active: true,
      });
    },
    onError: err => {
      toast.error('There was an error deleting this booking');
      console.error(err);
    },
  });
  return { isDeletingBooking, deleteBooking };
}

export default useDeleteBooking;
