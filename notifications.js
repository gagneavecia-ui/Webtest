import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";


// Créer une notification utilisateur
export async function createUserNotification(
  db,
  userId,
  title,
  body,
  type
){

  try {

    await addDoc(
      collection(db,"notifications"),
      {
        userId:userId,
        title:title,
        body:body,
        type:type || "general",
        read:false,
        createdAt:new Date().toISOString()
      }
    );

    console.log("✅ Notification créée");

  }catch(error){

    console.error(
      "Erreur création notification:",
      error
    );

  }

}



// Écouter les notifications utilisateur
export function listenUserNotifications(
  db,
  userId,
  callback
){

 const q=query(
   collection(db,"notifications"),
   where("userId","==",userId),
   orderBy("createdAt","desc")
 );


 return onSnapshot(q,(snapshot)=>{


   snapshot.docChanges().forEach(change=>{

     if(change.type==="added"){

       callback(
         change.doc.data()
       );

     }

   });


 });

}
