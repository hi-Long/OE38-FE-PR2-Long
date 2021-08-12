import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_ROUTE_CONCEPTS } from "../constants";

export const fetchConcepts = createAsyncThunk(
    'product/fetchConcepts',
    async () => {
        const response = await axios.get(SERVER_ROUTE_CONCEPTS)
        return { categories: response.data }
    }
)
