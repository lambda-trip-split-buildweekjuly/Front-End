//Presentational table
[
    {
        trip_name: string,
        trip_id: id,
        expenses: [
            {
                expense_name: string,
                expense_id: id,
                people: [
                    {
                        person_id: id, 
                        amount_paid: number
                    }
                ]
            }
        ]
    }
]

//Computational table
[
    {
        person_name: string,
        person_id: id,
        expenses: [
            {
                expense_id: id,
                amount_paid: number
            }
        ]
    }
]


[
    {
        trip_name: string,
        trip_id: id,
        trip_closed: Boolean,
        expense_name: string,
        expense_id: id,
        expense_amount: number,
        person_name: string,
        person_id: id
    }
]