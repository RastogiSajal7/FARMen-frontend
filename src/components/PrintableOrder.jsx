import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import Navbar from "../components/Navbar";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  subHeader: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  thankYou: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  }
});

const OrderDocument = ({ payment_id, totalPrice, storeAddress, cartItems }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Payment Successful</Text>
        <Text style={styles.subHeader}>{storeAddress}</Text>
        <Text style={styles.text}>Payment ID: {payment_id}</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
        <Text style={styles.text}>Time: {new Date().toLocaleTimeString()}</Text>
        <Text style={styles.subHeader}>Fresh From The Farm:</Text>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Text key={item._id || index} style={styles.text}>
              {item.prodName} - {item.quantity || 1}x ₹{item.prodPrice}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No items found in the order.</Text>
        )}
        <Text style={styles.total}>Total Price: ₹{totalPrice}</Text>
        <Text style={styles.thankYou}>Thank you for connecting with FARMen!</Text>
      </View>
    </Page>
  </Document>
);

const PrintableOrder = () => {
  const location = useLocation();
  const { state } = location;
  const {
    payment_id,
    totalPrice,
    storeAddress,
    cartItems,
  } = state || {};

  useEffect(() => {
    const sendReceiptData = async () => {
      const receiptData = {
        payment_id,
        totalPrice,
        // storeAddress,
        // cartItems,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      console.log(receiptData);

      try {
        const response = await fetch('https://farmen-backend.onrender.com/payments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(receiptData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Receipt data successfully sent to the database');
      } catch (error) {
        console.error('There was a problem with sending receipt data:', error);
      }
    };

    sendReceiptData();
  }, [payment_id, totalPrice]);

  return (
    <>
      <Navbar />
      <div className="bg-green-100 pt-20 h-screen p-32">
        <div className="mx-80 px-4">
          <div className="pt-8 pl-28 pr-28 pb-8 rounded-3xl bg-yellow-200">
            <div className="text-center text-3xl font-semibold text-emerald-900">
              Payment Successful
            </div>
            <p className="text-center">{storeAddress}</p>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <p className="font-semibold text-amber-900">Payment ID: {payment_id}</p>
                <div className="font-semibold flex flex-row gap-10">
                  <p>Date: {new Date().toLocaleDateString()}</p>
                  <p>Time: {new Date().toLocaleTimeString()}</p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-green-800">Fresh From The Farm:</h2>
                {cartItems && cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={item._id || index} className="cart-item mb-2">
                      <p>
                        {item.prodName} - {item.quantity || 1}x ₹{item.prodPrice}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No items found in the order.</p>
                )}
              </div>
              <p className="-ml-20 font-semibold text-green-800">Total Price: ₹{totalPrice}</p>
              <p className="text-center text-green-600 mt-4 pb-10">
                Thank you for connecting with FARMen!
              </p>
              <PDFDownloadLink
                className="bg-emerald-900 text-white p-2 rounded-lg"
                document={<OrderDocument payment_id={payment_id} totalPrice={totalPrice} storeAddress={storeAddress} cartItems={cartItems} />}
                fileName="order.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download Receipt"
                }
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintableOrder;
