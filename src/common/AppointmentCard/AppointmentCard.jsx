import "./AppointmentCard.css";
import { useDispatch } from "react-redux";
import { loadDesignData } from "../../pages/designSlice";
import { deleteTattoo } from "../../services/apiCalls";
import { userDataCheck } from "../../pages/userSlice";
import { useState } from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';