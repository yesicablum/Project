import { create } from "zustand";
import { Bookings, ServicesData, UserData } from "../data/DataBase";

const useStore = create((set) => ({
  currentUser: {
    id: null,
    name: "",
    email: "",
    password: "",
    role: "",
  },
  setCurrentUser: (user) =>
    set((state) => ({ currentUser: { ...state.currentUser, ...user } })),
  clearCurrentUser: () =>
    set(() => ({
      currentUser: {
        id: null,
        name: "",
        email: "",
        password: "",
        role: "",
      },
    })),
  isLoggedIn: false,
  setIsLoggedIn: (status) => set(() => ({ isLoggedIn: status })),
  users: UserData,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      ),
    })),
  services: ServicesData,
  addService: (service) =>
    set((state) => ({ services: [...state.services, service] })),
  removeService: (serviceId) =>
    set((state) => ({
      services: state.services.filter((service) => service.id !== serviceId),
    })),
  bookings: Bookings,
  addBooking: (booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),
  removeBooking: (bookingId) =>
    set((state) => ({
      bookings: state.bookings.filter((booking) => booking.id !== bookingId),
    })),
}));

export default useStore;
