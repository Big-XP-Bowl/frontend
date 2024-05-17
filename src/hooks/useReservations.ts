import { useEffect, useState } from 'react';
import { IReservation } from '../types/types';
import { handleHttpErrors, HttpException } from '../utils/fetchUtils';
import { API_URL } from '../settings';
import toast from 'react-hot-toast';

function useReservations() {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const RESERVATIONURL = API_URL + '/reservations';

  const fetchReservations = async () => {
    try {
      const res = await fetch(RESERVATIONURL);
      const data = await handleHttpErrors(res);
      setReservations(data);
    } catch (error) {
      if (error instanceof HttpException) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchReservations().then(() => setIsLoading(false));
  }, []);

  const fetchReservationsByID = async (id: number) => {
    try {
      const res = await fetch(RESERVATIONURL + '/' + id);
      const data = await handleHttpErrors(res);
      setReservations(data);
    } catch (error) {
      if (error instanceof HttpException) {
        toast.error(error.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  }


  const createReservation = async (reservation: IReservation) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      };
      const res = await fetch(RESERVATIONURL + '/create', options);
      const data = await handleHttpErrors(res);
      setReservations(data);
    } catch (error) {
      if (error instanceof HttpException) {
        toast.error(error.message);
      } else {
        toast.error('En uventet fejl opstod');
      }
    }
  };

  return { reservations, isLoading, fetchReservationsByID, createReservation };
}

export default useReservations;

// THE BACKEND API. TODO: Make costum hook for fetching data from the backend
// @RestController
// @RequestMapping("/reservations")
// public class ReservationController {
//     private final ReservationService reservationService;

//     public ReservationController(ReservationService reservationService) {
//         this.reservationService = reservationService;
//     }

//     // get all reservations
//     @GetMapping
//     public List<ReservationDTO> getAllReservations() {
//         return reservationService.getAllReservations();
//     }

//     @GetMapping("/{id}")
//     public ReservationDTO getReservationById(@PathVariable int id) {
//         return reservationService.getReservationById(id);
//     }

//     @PostMapping("/create")
//     public ReservationDTO createReservation(@RequestBody ReservationDTO reservationDTO) {
//         return reservationService.createReservation(reservationDTO);
//     }

//     @PatchMapping("/{id}")
//     public ReservationDTO updateReservation(@PathVariable int id, @RequestBody ReservationDTO reservationDTO) {
//         return reservationService.updateReservation(id, reservationDTO);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteReservation(@PathVariable int id) {
//         reservationService.deleteReservation(id);
//     }
// }
