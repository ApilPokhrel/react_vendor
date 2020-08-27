import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? "relationship" : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}
/*
// This is for the action table
*/
const dataTable = [
  ["James Smith", "Photographer", "Alexandria", "30"],
  ["Michael Smith", "Hacker", "Aurora", "36"],
  ["Robert Smith", "Web Developer", "Austin", "54"],
  ["Maria Garcia", "Android App Developer", "Boston", "22"],
  ["David Smith", "Hybrid App Developer", "Chandler", "33"],
  ["Maria Rodriguez", "Doctor", "Charlotte", "30"],
  ["Mary Smith", "Photographer", "Dayton", "45"],
  ["Maria Hernandez", "Graphics Designer", "Dallas", "55"],
  ["John Smith", "Java Developer", "Lincoln", "39"],
  ["Joe Smith", "Software Engineer", "Memphis", "23"],
  ["Bob Smith", "Photographer", "London", "30"],
  ["Mike Smith", "Designer", "Phoenix", "22"],
  ["Juan Carlos", "Coriographer", "Warren", "36"],
  ["Jane Smith", "Software Engineer", "Cody", "43"],
  ["Mike Jones", "Ethical Hacker", "Elizabeth", "30"],
  ["David Smith", "Accontant", "London", "54"],
  ["Sarah Smith", "Chief Financial Officer (CFO)", "Nebraska", "64"],
  ["James Smith", "Web Developer", "Maxico", "45"],
  ["James Smith", "Photographer", "Alexandria", "30"],
  ["Michael Smith", "Hacker", "Aurora", "36"],
  ["Robert Smith", "Web Developer", "Austin", "54"],
  ["Maria Garcia", "Android App Developer", "Boston", "22"],
  ["David Smith", "Hybrid App Developer", "Chandler", "33"],
  ["Maria Rodriguez", "Doctor", "Charlotte", "30"],
  ["Mary Smith", "Photographer", "Dayton", "45"],
  ["Maria Hernandez", "Graphics Designer", "Dallas", "55"],
  ["John Smith", "Java Developer", "Lincoln", "39"],
  ["Joe Smith", "Software Engineer", "Memphis", "23"],
  ["Bob Smith", "Photographer", "London", "30"],
  ["Mike Smith", "Designer", "Phoenix", "22"],
  ["Juan Carlos", "Coriographer", "Warren", "36"],
  ["Jane Smith", "Software Engineer", "Cody", "43"],
  ["Mike Jones", "Ethical Hacker", "Elizabeth", "30"],
  ["David Smith", "Accontant", "London", "54"],
  ["Sarah Smith", "Chief Financial Officer (CFO)", "Nebraska", "64"],
  ["James Smith", "Web Developer", "Maxico", "45"],
  ["James Smith", "Photographer", "Alexandria", "30"],
  ["Michael Smith", "Hacker", "Aurora", "36"],
  ["Robert Smith", "Web Developer", "Austin", "54"],
  ["Maria Garcia", "Android App Developer", "Boston", "22"],
  ["David Smith", "Hybrid App Developer", "Chandler", "33"],
  ["Maria Rodriguez", "Doctor", "Charlotte", "30"],
  ["Mary Smith", "Photographer", "Dayton", "45"],
  ["Maria Hernandez", "Graphics Designer", "Dallas", "55"],
  ["John Smith", "Java Developer", "Lincoln", "39"],
  ["Joe Smith", "Software Engineer", "Memphis", "23"],
  ["Bob Smith", "Photographer", "London", "30"],
  ["Mike Smith", "Designer", "Phoenix", "22"],
  ["Juan Carlos", "Coriographer", "Warren", "36"],
  ["Jane Smith", "Software Engineer", "Cody", "43"],
  ["Mike Jones", "Ethical Hacker", "Elizabeth", "30"],
  ["David Smith", "Accontant", "London", "54"],
  ["Sarah Smith", "Chief Financial Officer (CFO)", "Nebraska", "64"],
  ["James Smith", "Web Developer", "Maxico", "45"]
];

export { dataTable };
