import fetch from 'node-fetch'

interface CustomerItem {
  id: number;
  name: string;
  address: {
     street: string;
     suite: string;
   },
  company: {
     name: string;
   }
};

interface Customer {
  id: number;
  name: string;
  street_address: string;
  company_name: string;
};

type PromisedCustomer = Promise<Customer[]>

const apiURL = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = async (url: string): PromisedCustomer => {
  const response = await fetch(url).then(response => response.json());

  return response.map((customer: CustomerItem): Customer => {
            return {
              id: customer.id,
              name: customer.name,
              street_address: `${customer.address.suite} ${customer.address.street}`,
              company_name: customer.company.name
            }
        })
}

fetchUsers(apiURL).then(users => console.log(users))

