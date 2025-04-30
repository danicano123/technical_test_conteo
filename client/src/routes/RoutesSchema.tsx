
// import Dashboard from "../components/Dashboard/Dashboard";
import RegisterForm from "../components/Register/RegisterForm";
import CarInnovationsDashboard from "../views/CarInnovations/CarInnovationsDashboard";
import CarInnovationsDetail from "../views/CarInnovations/CarInnovationsDetail";
import CreateCarInnovations from "../views/CarInnovations/CreateCarInnovations";
import EditCarInnovations from "../views/CarInnovations/EditCarInnovations";
import Login from "../views/Login";




export const RoutesSchema = [
  {
    path: "/",
    element: CarInnovationsDashboard,
  },
  {
    path: "/read-car-innovations/:id",
    element: CarInnovationsDetail,
  },
  {
    path: "/edit-car-innovations",
    element: EditCarInnovations,
  },
  {
    path: "/create-car-innovations",
    element: CreateCarInnovations,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: RegisterForm,
  },

  

  // {CreateUniversity
  //   path: "/microsites/:slug",
  //   element: MicrositeDetail,
  //   isProtected: true,
  // },
  // {
  //   path: "/microsites/:slug/form/:micrositeId",
  //   element: PaymentForm,
  //   isProtected: true,
  // },



  // {
  //   path: "/payments",
  //   element: PaymentsList,
  //   isProtected: true,
  // },
  // {
  //   path: "/dashboard",
  //   element: Dashboard,
  //   isProtected: true,
  //   requiredRole: "admin",
  //   children: [
  //     {
  //       path: "users",
  //       element: UsersDashboard,
  //     },
  //     {
  //       path: "users/:id",
  //       element: EditUser,
  //     },
  //     {
  //       path: "microsites",
  //       element: MicrositesDashboard,
  //     },
  //     {
  //       path: "microsites/:id",
  //       element: EditMicrosite,
  //     },
  //     {
  //       path: "microsites/create-microsite",
  //       element: CreateMicrosite,
  //     },
  //     {
  //       path: "microsites/form/:microsite_id",
  //       element: EditForm,
  //     },
  //     {
  //       path: "microsites/payments/:micrositeId",
  //       element: PaymentsDashboard,
  //     },
  //   ],
  // },
];
