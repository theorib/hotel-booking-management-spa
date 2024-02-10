import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';
import { useSearchParams } from 'react-router-dom';

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  const [searchParams] = useSearchParams();

  const numBookings = bookings.length;

  const sales = bookings.reduce(
    (acc, booking) => acc + booking.totalPrice + booking.extrasPrice,
    0
  );

  const checkins = confirmedStays.length;

  // checkin nights divided by available nights
  const ocupation =
    confirmedStays.reduce((acc, stay) => acc + stay.numNights, 0) /
    (numDays * numCabins);

  return (
    <>
      <Stat
        title={'Bookings'}
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title={'Sales'}
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title={'Check ins'}
        value={checkins}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title={'Occupancy rate'}
        value={`${Math.round(ocupation * 100)}%`}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
