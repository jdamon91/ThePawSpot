const vetData = [
  {
    title: "General Veterinarian",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/guy.jpg?alt=media&token=abefb6f6-638f-4408-b72b-a9dc07f3060c",
    name: "Dr. Bradley Reynolds",
    distance: "1.8 Miles",
  },
  {
    title: "Veterinary Dentist",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/girl.jpg?alt=media&token=c814c958-bdf2-49f8-ac2e-cab257241748",
    name: "Dr. Penelope Charles",
    distance: "2.5 Miles",
  },
  {
    title: "General Veterinarian",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/guy-2.jpg?alt=media&token=8ae04a40-db7b-48d7-92d4-71df21418146",
    name: "Zimmity Zeeman",
    distance: "1.8 Miles",
  },
  {
    title: "Veterinary Dentist",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/girl-2.jpg?alt=media&token=e1b9a6df-0cd2-4bb1-91d4-1dee775e198f",
    name: "Penelope Peeman",
    distance: "2.5 Miles",
  },
];

const shelterData = [
  {
    title: "Animal Shelter",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/12202017_01.jpeg?alt=media&token=8666010a-da2a-40f1-a047-188e5db16b66",
    name: "Lost Cats & Puppies",
    distance: "15 Miles",
  },
  {
    title: "Animal Shelter",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/shelter2.jpeg?alt=media&token=d3b1a597-5cd8-4965-810f-cf526ede9947",
    name: "Animal Rescue Center",
    distance: "8.3 Miles",
  },
  {
    title: "Animal Shelter",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/shelter3.jpeg?alt=media&token=45cb9c6c-a03f-4b53-b59e-528bb822d546",
    name: "Animals 4Ever",
    distance: "5.2 Miles",
  },
  {
    title: "Animal Shelter",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/shelter4.png?alt=media&token=51c7d562-7523-4bda-a1c4-7118c0e95225",
    name: "Cat Sanctuary",
    distance: "4.5 Miles",
  },
];

const lostPetData = [
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat1.jpeg?alt=media&token=102a6a59-a63d-4e00-b0d6-bd6704232a01",
    name: "Whiskers",
    title: "Tabby Cat",
    time: "3 Days",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog1.jpeg?alt=media&token=707587ec-8a19-4f77-a04a-5caa87dbbf02",
    name: "Oscar",
    title: "Golden Retriever",
    time: "2 Weeks",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat2.jpeg?alt=media&token=0ee86049-79ba-4287-af00-3102ef714c3f",
    name: "Mrs. Meowsy",
    title: "Calico Cat",

    time: "3 Weeks",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog2.jpeg?alt=media&token=f304b97f-8d05-4ebe-adc9-1793d7adc82d",
    name: "Reginald",
    title: "Pomeranian",
    time: "1 Month",
  },
];

const donateData = [
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat1.jpeg?alt=media&token=102a6a59-a63d-4e00-b0d6-bd6704232a01",
    name: "Whiskers",
    title: "Surgery",
    raised: 50,
    goal: 200,
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog1.jpeg?alt=media&token=707587ec-8a19-4f77-a04a-5caa87dbbf02",
    name: "Diego",
    title: "Illness",
    raised: 200,
    goal: 500,
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat2.jpeg?alt=media&token=0ee86049-79ba-4287-af00-3102ef714c3f",
    name: "Mrs. Meowsy",
    title: "Surgery",
    raised: 800,
    goal: 1000,
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog2.jpeg?alt=media&token=f304b97f-8d05-4ebe-adc9-1793d7adc82d",
    name: "Sir Charles",
    title: "Illness",
    raised: 300,
    goal: 2000,
  },
];

const adoptData = [
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat1.jpeg?alt=media&token=102a6a59-a63d-4e00-b0d6-bd6704232a01",
    name: "Whiskers",
    title: "Lost Cats & Puppies",
    age: "6 Months",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog1.jpeg?alt=media&token=707587ec-8a19-4f77-a04a-5caa87dbbf02",
    name: "Diego",
    title: "Animal Rescue Center",
    age: "9 Months",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/cat2.jpeg?alt=media&token=0ee86049-79ba-4287-af00-3102ef714c3f",
    name: "Sheeba",
    title: "Animals 4 Ever",
    age: "3 Years",
  },
  {
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/animalapp-194de.appspot.com/o/dog2.jpeg?alt=media&token=f304b97f-8d05-4ebe-adc9-1793d7adc82d",
    name: "Russell",
    title: "Dog Sanctuary",
    age: "6 Years",
  },
];

export { adoptData, donateData, lostPetData, shelterData, vetData };
