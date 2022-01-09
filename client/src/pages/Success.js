function Success() {
    return (
      <div>
        <Jumbotron>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        </Jumbotron>
      </div>
    );
  };

  const [addOrder] = useMutation(ADD_ORDER);
  const cart = await idbPromise('cart', 'get');
  const products = cart.map(item => item._id);

useEffect(() => {
  async function saveOrder() {

  }

  saveOrder();
}, [addOrder]);

if (products.length) {
    const { data } = await addOrder({ variables: { products } });
    const productData = data.addOrder.products;
  
    productData.forEach((item) => {
      idbPromise('cart', 'delete', item);
    });
  }