import express from "express";
const app = express();
const port = 4242;

import calendarService from "./calendarService.js";

const data = [
    {
        "id": 1,
        "location": "Mercês",
        "dateId": "dataeventopositivo",
        "nome": "Festa positivo",
    },
    {
        "id": 2,
        "location": "Centro Cívico",
        "dateId": "dataeventonegativo",
        "nome": "Encontro negativo"
    },
    {
        "id": 3,
        "location": "Batel",
        "dateId": "dataeventoneutro",
        "nome": "Reunião neutra"
    },
    {
        "id": 4,
        "location": "Água Verde",
        "dateId": "dataeventofestival",
        "nome": "Festival cultural"
    }
];

app.get('/evento/:id', async(req, res) => {
    const id = req.params.id;

    const evento = data.find((e) => e.id = id);
    const dateRes = await calendarService.getDate(evento.dateId);
    evento.date = dateRes.date;

    res.send(evento);
})

app.listen(port, async() => {
    console.log("Listening on port:", port);
})

