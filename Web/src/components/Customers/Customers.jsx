import "./Customer.css";
const customers = [
 {
  img: "",
  name: "Ranbir Singh",
  id: 1,
 },
 {
  img: "",
  name: "Durga Bahadur Acharya",
  id: 2,
 },
 {
  img: "",
  name: "Manish Yadav",
  id: 3,
 },
];

const Customers = () => {
 return (
  <div className='customer-section'>
   <div className='customer-header'>
    <h2>Our Happy Customers</h2>
   </div>

   <p className='customer-subtitle'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit dignissimos quae veniam debitis hic, deserunt ipsam ut distinctio libero earum quaerat non perferendis cupiditate,
    eligendi autem, optio sed magnam!
   </p>

   <div className='customer-card-container'>
    {customers.map((customer) => {
     return (
      <div className='customer-card' key={customer.id}>
       <div className='customer-card__image'>
        <img src='https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='' />
       </div>

       <div className='customer-title'>
        <h3>{customer.name}</h3>
       </div>

       <div className='customer-review'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ut vero distinctio molestias minus debitis voluptas voluptate illum rem! Incidunt maiores cumque blanditiis aspernatur commodi
        mollitia qui, omnis provident doloremque quisquam impedit debitis eaque voluptates, perferendis soluta nesciunt laudantium ipsum atque? Quas facere officiis voluptatem. Ipsam reprehenderit
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default Customers;
