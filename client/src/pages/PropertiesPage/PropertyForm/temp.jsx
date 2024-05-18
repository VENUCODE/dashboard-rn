//     let data;
//     if (
//       propertyType === 'residential' &&
//       transactionTypes.includes('FullHouse')
//     ) {
//       data = {
//         user_id,
//         propertyType,
//         VerificationStatus: usertype === 'agent' ? 'Verified' : 'notverified',
//         transactionTypes,
//         bhkType,
//         availability,
//         fhpropertyType,
//         bathrooms,
//         furnished,
//         parking,
//         waterSupply,
//         city,
//         location,
//         landmark,
//         longitude,
//         latitude,
//         availableFrom,
//         expectedPrice,
//         priceNegotiable,
//         description,
//         images: dataImages.map(image => {
//           console.log(image);
//           let base64Image = data:image/jpeg;base64,${image};
//           return base64Image;
//         }),
//         // Add other fields as needed
//       };
//       console.log('FullHouse Data:', data);
//       // Send postData to your backend API
//     }
//     else if (
//       propertyType === 'commercial' && transactionTypes.includes('Rent')
//     ) {
//       data = {
//         user_id,
//         propertyType,
//         VerificationStatus: usertype === 'agent' ? 'Verified' : 'notverified',
//         transactionTypes,
//         pplotArea,
//         numFloors,
//         leaseType,
//         features,
//         additionalFacilities,
//         leaseDuration,
//         rentAmount,
//         commercial_propertyType,
//         city,
//         location,
//         landmark,
//         longitude,
//         latitude,
//         images: dataImages.map(image => {
//           console.log(image);
//           let base64Image = data:image/jpeg;base64,${image};
//           return base64Image;
//         }),
//       };
//       console.log("commercial")
//     }
//     else if (
//       propertyType === 'commercial' && transactionTypes.includes('Sale')
//     ) {
//       data = {
//         user_id,
//         propertyType,
//         VerificationStatus: usertype === 'agent' ? 'Verified' : 'notverified',
//         transactionTypes,
//         pplotArea,
//         numFloors,
//         features,
//         additionalFacilities,
//         saleAmount,
//         commercial_propertyType,
//         city,
//         location,
//         landmark,
//         longitude,
//         latitude,
//         images: dataImages.map(image => {
//           console.log(image);
//           let base64Image = data:image/jpeg;base64,${image};
//           return base64Image;
//         }),

//       };
//       console.log("commercial")
//     }

//     else if (
//       propertyType === 'residential' &&
//       transactionTypes.includes('PG/Hostel')
//     ) {
//       console.log("PG hostel data");
//       data = {
//         user_id,
//         propertyType,
//         VerificationStatus: usertype === 'agent' ? 'Verified' : 'notverified',
//         transactionTypes,
//         city,
//         location,
//         landmark,
//         longitude,
//         latitude,
//         tenantType,
//         accommodationType,
//         roomTypes,
//         roomPrices,
//         amenities,
//         sharedFacilities,
//         security,
//         rulesAndRegulations,
//         parkingPossibility,
//         images: dataImages.map(image => {
//           console.log(image);
//           let base64Image = data:image/jpeg;base64,${image};
//           return base64Image;
//         }),

//       },
//       console.log('PG hostel Data:', data);
//     }
//     //land or plot submission data
//     else if (
//       propertyType === 'land_plot' &&
//       transactionTypes.includes('Resale')
//     ) {
//       console.log("I'm herebroo");
//       data = {
//         user_id,
//         propertyType,
//         VerificationStatus: usertype === 'agent' ? 'Verified' : 'notverified',
//         transactionTypes,
//         pWater_Supply,
//         pElectricity_Connection,
//         pSewage_Connection,
//         pGated_Security,
//         pWidthofFacingRoad,
//         pgatedProject,
//         pplotArea,
//         plength,
//         pwidth,
//         papproved,
//         pfloorsAllowed,
//         city,
//         location,
//         landmark,
//         longitude,
//         latitude,
//         availableFrom,
//         expectedPrice,
//         underLoan,
//         priceNegotiable,
//         description,
//         images: dataImages.map(image => {
//           console.log(image);
//           let base64Image = data:image/jpeg;base64,${image};
//           return base64Image;
//         }),
//       };
//       console.log('-----------------------------');
//       console.log('Land/Plot Resale Data:', data);
//       console.log('-----------------------------');
//       // Send postData to your backend API
//     } else {
//       console.log('Submit other data');
//       // Submit other data if needed
//     }
//     postDataToUrl(url,data,navigation);
//    // postDataToUrl(url, data);
//     resetState();
//   };
