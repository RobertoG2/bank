function Home(){
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Card
        txtcolor="blue"
        header=" Bank of Garcia"
        title="Welcome to Bank of Garcia"
        text="Feel free to browse."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }