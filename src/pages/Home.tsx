import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Button, Card } from "react-bootstrap";
const products = [
  {
    title: "Gillete 2x1",
    description: "a powerful razor",
  },

  {
    title: "Daka Shoes",
    description: "a powerful razor",
  },

  {
    title: "Laptop VivoBook",
    description: "a powerful razor",
  },

  {
    title: "Keyboard andM",
    description: "a powerful razor",
  },
  {
    title: "Laptop i5",
    description: "a powerful razor",
  },
  {
    title: "Laptop i7",
    description: "a powerful razor",
  },
  {
    title: "PC Gamer cheap",
    description: "a powerful razor",
  },
  {
    title: "PC Gamer + mouse",
    description: "a powerful razor",
  },
  {
    title: "Tshirt",
    description: "a powerful razor",
  },
  {
    title: "Jeans",
    description: "a powerful razor",
  },
  {
    title: "Pack Batteries",
    description: "a powerful razor",
  },
  {
    title: "Laptop 123",
    description: "a powerful razor",
  },
  {
    title: "Laptop 2",
    description: "a powerful razor",
  },
  {
    title: "Laptop 3",
    description: "a powerful razor",
  },
  {
    title: "Laptop 4",
    description: "a powerful razor",
  },
];
export const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row hero gradient">
          <div className="col-md-12 text-center">
            <h1>Black Friday Sales!!!</h1>
            <Button>Explorar</Button>
          </div>
        </div>
      </div>
      <div className="container">
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              800: {
                perPage: 2,
              },
            },
            height: 380,
            gap: ".9rem",
            pagination: false,
            hasAutoplayProgress: true,
          }}
          className="slider my-5"
        >
          {products.map((product) => (
            <SplideSlide>
              <Card className="">
                <Card.Img
                  variant="top"
                  src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                />
                <Card.Body>
                  <Card.Title className="card__title">
                    {product.title}
                  </Card.Title>
                  <p>$ 9.99 USD</p>
                  <Button className="card__button btn" size="sm">
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, error
          dolores cupiditate necessitatibus nisi magni. Voluptas, nesciunt
          dolorum corrupti fugiat saepe, rerum illum magnam quos ut dolore
          perspiciatis modi deleniti.
        </p>
      </div>
    </div>
  );
};
