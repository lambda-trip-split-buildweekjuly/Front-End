// //Presentational table
// [
//     {
//         trip_name: string,
//         trip_id: id,
//         expenses: [
//             {
//                 expense_name: string,
//                 expense_id: id,
//                 people: [
//                     {
//                         person_id: id, 
//                         amount_paid: number
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// //Computational table
// [
//     {
//         person_name: string,
//         person_id: id,
//         expenses: [
//             {
//                 expense_id: id,
//                 amount_paid: number
//             }
//         ]
//     }
// ]


// [
//     {
//         trip_name: string,
//         trip_id: id,
//         trip_closed: Boolean,
//         expense_name: string,
//         expense_id: id,
//         expense_amount: number,
//         person_name: string,
//         person_id: id
//     }
// ]


// expense[
//     0{
//     expense_id
//     expense_title
//     expense_price
//     expense_members[
//       {
//         person_id
//         person_amount_paid
//         expense_id
//       },
//       {
//         person_id
//         person_amount_paid
//         expense_id
//       }
//      ]
//     },
//     1{
//       expense_id
//       expense_title
//       expense_price
//       expense_members[
//         {
//           person_id
//           person_amount_paid
//           expense_id
//         },
//         {
//           person_id
//           person_amount_paid
//           expense_id
//         }
//        ]
//       }
  
//   ] 

[
    {
        user_id: id,
        trip_name: string,
        trip_id: id,
        trip_closed: Boolean,
        expense:[
            {
                expense_name: string,
                expense_id: id,
                expense_amount: number,
                expense_members:[
                    {
                        person_name: string,
                        amount_paid: 50,
                        person_id: id
                    },
                 ]
          
          }  
        ]
    }
]