import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_PRODUCTS } from '../constants'

// SEARCH PRODUCTS BY NAME
export const searchProductsByName = createAsyncThunk('search/searchByName', async name => {
    const response = await axios.get(`${SERVER_PRODUCTS}?name_like=${name}`)
    const responseData = response.data

    // Get the number of results
    let noResults = 0
    const searchResults = {
        subcategories: [],
        concepts: [],
        materials: []
    }

    // Filter results into categories
    const filterSearchResults = (field, value) => {
        if (!field.includes(value)) {
            field.push(value)
            noResults++
        }
    }

    responseData.forEach(product => {
        const { subcategory, concept, material } = product
        filterSearchResults(searchResults.subcategories, subcategory)
        filterSearchResults(searchResults.materials, material)
        filterSearchResults(searchResults.concepts, concept)
    });

    return { searchResults, noResults }
})
