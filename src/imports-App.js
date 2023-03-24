import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import NotFound from "./components/NotFound/NotFound";
import axios from "axios";

export { React, useState, useEffect, Routes, Route, useLocation, useNavigate, Cards, Nav, BackgroundVideo, About, Detail, Form, Favorites, NotFound, axios };