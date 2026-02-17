export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const menu = [
  {
    id: 'roll-livers-small',
    category: 'Livers & Roll',
    name: 'Chicken Liver Roll (Small)',
    description: 'Chicken livers in a fresh roll',
    price: 35,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpiNzMxNGQ4OWYyN2YwYzU3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTEzMmEwZTRmEAI=',
  },
  {
    id: 'roll-livers-large',
    category: 'Livers & Roll',
    name: 'Chicken Liver Roll (Large)',
    description: 'Extra chicken livers with fresh roll',
    price: 55,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpiNzMxNGQ4OWYyN2YwYzU3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTEzMmEwZTRmEAI=',
  },

  {
    id: 'burger-single',
    category: 'Burgers',
    name: 'Chicken Burger',
    description: 'Grilled chicken burger with lettuce & mayo',
    price: 75,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MToxZTQxMGZjY2I2MzlmMTIwOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTY2MGJhNjlmEAI=',
  },
  {
    id: 'burger-double',
    category: 'Burgers',
    name: 'Double Chicken Burger',
    description: 'Two chicken fillets, extra sauce',
    price: 87,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MToxZmU0MDA2NzUyM2M1NTYyOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTZkNTk4MDVmEAI=',
  },

  {
    id: 'quarter-chicken',
    category: 'Chicken',
    name: 'Quarter Chicken',
    description: 'Grilled Quarter chicken, single',
    price: 35,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo4M2ZlNjYyODliOGY5YzIzOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NjEwNGU0YjBmEAI=',
  },

  {
    id: 'half-chicken',
    category: 'Chicken',
    name: 'Half Chicken',
    description: 'Half chicken, single',
    price: 65,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo4M2ZlNjYyODliOGY5YzIzOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NjEwNGU0YjBmEAI=',
  },


  {
    id: 'wings-6',
    category: 'Chicken',
    name: '6 Chicken Wings',
    description: 'Peri-peri chicken wings',
    price: 55,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTowZjY4NmI2NzZlNGFiNWM3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTg2NWU2YzFmEAI=',
  },

  {
    id: 'wings-12',
    category: 'Chicken',
    name: '12 Chicken Wings',
    description: 'Perfect for sharing',
    price: 90,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTowZjY4NmI2NzZlNGFiNWM3OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTg2NWU2YzFmEAI=',
  },

  {
    id: 'nuggets',
    category: 'Chicken',
    name: '6 Chicken Nuggets',
    description: 'Golden crispy nuggets',
    price: 49,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpkMjY0MGJlZTgxYWI1ZmVhOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NThmNWI0OTlmEAI=',
  },


  {
    id: 'nuggets',
    category: 'Chicken',
    name: '10 Chicken Nuggets',
    description: 'Golden crispy nuggets',
    price: 89,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpkMjY0MGJlZTgxYWI1ZmVhOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NThmNWI0OTlmEAI=',
  },

  {
    id: 'chicken-meal',
    category: 'Meals',
    name: 'Grilled Chicken Meal',
    description: 'Quarter chicken with pap, rice or chips',
    price: 49,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MToxMThmYjMzOWMxZjAyODc2OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NTk3ZTBiZjVmEAI=',
  },

  {
    id: 'salad-meal',
    category: 'Meals',
    name: 'Chicken Salad Meal',
    description: 'Grilled chicken with fresh salad',
    price: 95,
    image: 'https://onebalancedlife.com/wp-content/uploads/2022/06/Air-Fried-Chicken-Tender-Salad-768x1024.jpg',
  },
  {
    id: 'wings-meal',
    category: 'Meals',
    name: 'Wings with chips',
    description: '4 Chicken with large chips',
    price: 51,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MToxOWUxMzE2NzNjZTFiODUwOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGIwMGEzZjE3YzNmEAI=',
  },

  {
    id: 'wings-meal',
    category: 'Meals',
    name: 'Wings with chips + drink',
    description: '4 Chicken with large chips and drink',
    price: 61,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo5OGE3MDRlZjA5MzczOTY1OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGIwMGE5ZTdkNWRmEAI=',
  },


  {
    id: 'kids-nuggets',
    category: 'Kids',
    name: 'Kids Nuggets Meal',
    description: '4 Nuggets + chips + juice',
    price: 59,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpiNzc1Yjg1NzEyZjNkYzZhOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NWI4MjdkZTJmEAI=',
  },

  {
    id: 'kids-burger',
    category: 'Kids',
    name: 'Kids Chicken Cheese Burger Meal',
    description: 'Burger + chips + juice',
    price: 69,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo0YzE2MWY0ZTQyMDFjYjFhOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGIwMDdlMmI0MjBmEAI=',
  },

  {
    id: 'family-meal-1',
    category: 'Family Meals',
    name: 'Burger, nuggets, chips + drinks combo',
    description: '2 Grilled chicken Burgers, 6 chicken nuggets + 2 small chips + 2 drinks',
    price: 210,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo3OGM4MzE0NWVjZDVlMzk0OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGIwMGJlMmNmYzVmEAI=',
  },

{
    id: 'pap-single',
    category: 'Extras',
    name: 'Pap',
    description: 'Pap-single',
    price: 13,
    image: 'https://images.squarespace-cdn.com/content/v1/5dcdc6859012af6fcd2b7ab3/1632194076222-593SI4MJ9NWVVU2J1C60/pap-pap.jpeg?format=1500w',
  },

  {
    id: 'Roll-single',
    category: 'Extras',
    name: 'Roll - single',
    description: 'Hamburger Roll',
    price: 11,
    image: 'https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTphZjdiYzM0NTk4MjYyYWJhOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAxNmQ4OGEwMzM2ODowMDA2NGE3NjY2YjlhYmJmEAI=',
  },

  {
    id: 'chips',
    category: 'Extras',
    name: 'Small Chips',
    description: 'Chips-small',
    price: 21,
    image: 'https://www.cookwell.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg1s4qnmz%2Fproduction%2F82694af53c1e85caca322e435067067806223518-2500x2500.jpg&w=3840&q=75',
  },


  {
    id: 'chips',
    category: 'Extras',
    name: 'Large Chips',
    description: 'Chips-large',
    price: 29,
    image: 'https://www.cookwell.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg1s4qnmz%2Fproduction%2F82694af53c1e85caca322e435067067806223518-2500x2500.jpg&w=3840&q=75',
  },

  {
    id: 'Juice',
    category: 'Drinks',
    name: 'Cappy Apple Juice',
    description: '330ml Cappy Apple',
    price: 13,
    image: 'https://www.coca-cola.com/content/dam/onexp/za/en/products/cappy-products-resized/desktop/cappy-spritzed-still-apple-330ml-can-d.png/width1960.png',
  },

  {
    id: 'Juice',
    category: 'Drinks',
    name: 'Cappy Orange Juice',
    description: '330ml Cappy Orange',
    price: 13,
    image: 'https://www.coca-cola.com/content/dam/onexp/za/en/products/cappy-products-resized/desktop/cappy-spritzed-still-orange-330ml-can-d.png',
  },

  {
    id: 'Coke',
    category: 'Drinks',
    name: 'Coke',
    description: '330ml Coca Cola',
    price: 15,
    image: 'https://www.shoprite.co.za/medias/10234069EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wxNjEzNDl8aW1hZ2UvcG5nfGltYWdlcy9oMzIvaDZhLzk5MTQ2MTkwMDI5MTAucG5nfDRlN2M3ZGJjYWZiYjAzMTFlODMwMjdlZjAzYmMyNWI5MDFiMTg3NTM3NmJhMWQ4NGQ1YjlkYTg3N2UyYjhmZjc',
  },

  {
    id: 'Fanta',
    category: 'Drinks',
    name: 'Fanta Orange',
    description: '300ml Fanta Orange',
    price: 14,
    image: 'https://superbhyper.co.za/wp-content/uploads/2023/08/Fanta-Orange-Soft-Drink-Bottle-300ml.jpg',
  },

  {
    id: 'Spar Letta',
    category: 'Drinks',
    name: 'Spar Letta Creme Soda',
    description: '440ml Spar Letta',
    price: 16,
    image: 'https://res.cloudinary.com/agrimark/image/upload/q_auto/f_auto/c_pad,h_570,w_570/v1/uploads/assets/564217-Sparletta-Creme-Soda-Pet-440Ml-c94d5a.png?_a=BAAAV6AI',
  },


];