export const fakeData = {
    "countries": [
        {"id": 1, "name": "China"},
        {"id": 2, "name": "France"},
        {"id": 3, "name": "Germany"},
        {"id": 4, "name": "Italy"},
        {"id": 5, "name": "United States"},
    ],
    "trip": {
        "id": 1,
        "name": "Disney 2019",
        "country": {
            "id": 5,
            "name": "United States"
        },
        "cities": [
            {
                "id": 1,
                "name": "Orlando",
                "datetime_of_arrival": "2020-05-01 06:48",
                "datetime_of_departure": "2020-05-10 06:48"
            },
            {
                "id": 2,
                "name": "Miami",
                "datetime_of_arrival": "2020-05-11 06:48",
                "datetime_of_departure": "2020-05-14 06:48"
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus enim, laoreet sed tellus sed, dapibus tincidunt turpis."
    }
}
