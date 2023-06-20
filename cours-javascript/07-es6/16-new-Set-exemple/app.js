//* new Set() - accepte des objets itérables

const products = [
  { title: 'high-back bench', company: 'ikea' },
  { title: 'albany table', company: 'marcos' },
  { title: 'accent chair', company: 'caressa' },
  { title: 'wooden table', company: 'ikea' }
];

const companies = products.map((item) => item.company);
// console.log(companies);

const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

const finalCompanies = ['toutes', ...uniqueCompanies];
// console.log(finalCompanies);

const result = ['toutes', ...new Set(products.map((item) => item.company))];
console.log(result);
