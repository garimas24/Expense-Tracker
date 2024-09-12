// import React, { useState, useEffect } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
// import Box from "@mui/material/Box";
// import { ThemeProvider } from "@mui/material/styles";

// const ExpenseTracker = () => {
//   const initialBalance = 5000;
//   const [walletBalance, setWalletBalance] = useState(() => {
//     return JSON.parse(localStorage.getItem("walletBalance")) || initialBalance;
//   });
//   const [expenses, setExpenses] = useState(() => {
//     return JSON.parse(localStorage.getItem("expenses")) || [];
//   });
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     localStorage.setItem("walletBalance", JSON.stringify(walletBalance));
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }, [walletBalance, expenses]);

//   const addExpense = (expense) => {
//     if (expense.amount > walletBalance) {
//       enqueueSnackbar("Insufficient balance", { variant: "error" });
//       return;
//     }
//     setExpenses([...expenses, expense]);
//     setWalletBalance(walletBalance - expense.amount);
//   };

//   const addFunds = (amount) => {
//     setWalletBalance(walletBalance + amount);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#3B3B3B",
//         height: "100vw",
//         width: "100vw",
//         display: "flex",
//         margin: "20px",
//         border: "2px solid white",
//         font: "Ubuntu",
//       }}
//     >
//       <div>
//         <h1 style={{ font: "Ubuntu", color: "white" }}>Expense Tracker</h1>
//         <div>
//           <div
//             style={{ backgroundColor: "yellow", height: "70%", width: "70%" }}
//           >
//             <h2>Wallet Balance: ${walletBalance}</h2>
//             {/* <button onClick={() => addFunds(1000)}>Add $1000</button> */}

//             <ThemeProvider
//               theme={{
//                 palette: {
//                   primary: {
//                     main: "#007FFF",
//                     dark: "#0066CC",
//                   },
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 100,
//                   height: 100,
//                   borderRadius: 1,
//                   bgcolor: "primary.main",
//                   "&:hover": {
//                     bgcolor: "primary.dark",
//                   },
//                 }}
//               />
//             </ThemeProvider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <SnackbarProvider maxSnack={3}>
//       <ExpenseTracker />
//     </SnackbarProvider>
//   );
// };

// export default App;
