import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Tattoos } from "../Tattoos/Tattoos";
import { PaymentAdd } from "../PaymentAdd/PaymentAdd";
import { PaymentModify } from "../PaymentModify/PaymentModify";
import { Portfolio} from "../Portfolio/Portfolio";
import { DesignAdd} from "../DesignAdd/DesignAdd";
import { Appointments} from "../Appointments/Appointments"
import { AppointmentAdd} from "../AppointmentAdd/AppointmentAdd"
import { Admin} from "../Admin/Admin"
import { AdminAdd } from "../AdminAdd/AdminAdd";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tattoos" element={<Tattoos />} />
        <Route path="/paymentadd" element={<PaymentAdd />} />
        <Route path="/paymentmodify" element={<PaymentModify />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/designadd" element={<DesignAdd />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointmentadd" element={<AppointmentAdd />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminadd" element={<AdminAdd />} />
      </Routes>
    </>
  );
};