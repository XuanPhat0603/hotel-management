import express from "express";
import authRoute from "./auth.route";
import roomRoute from "./room.route";
import invoiceRoute from "./invoice.route";
import ticketRoute from "./ticket.route";
import roomTypeRoute from "./roomType.route";
import customerRoute from "./customer.route";
import userRoute from "./user.route";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/api/auth",
        route: authRoute,
    },
    {
        path: "/api/room",
        route: roomRoute,
    },
    {
        path: "/api/ticket",
        route: ticketRoute,
    },
    {
        path: "/api/invoice",
        route: invoiceRoute,
    },
    {
        path: "/api/roomtype",
        route: roomTypeRoute,
    },
    {
        path: "/api/customer",
        route: customerRoute,
    },
    {
        path: "/api/user",
        route: userRoute,
    },
    {
        path: "/api",
        route: (req, res) => {
            res.json("Welcome to the API");
        }
    },
    {
        path: "/",
        route: (req, res) => {
            res.json("Welcome to the API");
        }
    },
];

// set router for defaultRoutes
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;