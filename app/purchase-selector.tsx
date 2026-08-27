"use client";

import Image from "next/image";
import { useState } from "react";

const options = [
  {
    quantity: 1,
    title: "1 unidad",
    description: "Ideal para comenzar el cuidado diario.",
    price: "20,99 €",
    badge: "PRUÉBALO",
    checkout: "https://praquel.shop/cart/43065860489312:1",
  },
  {
    quantity: 2,
    title: "2 unidades",
    description: "Rutina completa para un uso constante.",
    price: "37,78 €",
    badge: "POPULAR",
    checkout: "https://praquel.shop/cart/43101788536928:1",
  },
  {
    quantity: 3,
    title: "3 unidades",
    description: "Mayor duración para acompañar el progreso.",
    price: "52,97 €",
    badge: "MEJOR VALOR",
    checkout: "https://praquel.shop/cart/43101789061216:1",
  },
];

export function PurchaseSelector() {
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  const selectedOption = options.find((option) => option.quantity === selectedQuantity) ?? options[1];

  return (
    <div className="purchase-selector">
      <div className="options" role="radiogroup" aria-label="Selecciona la cantidad">
        {options.map((option) => (
          <label key={option.quantity}>
            <input
              type="radio"
              name="cantidad"
              checked={selectedQuantity === option.quantity}
              onChange={() => setSelectedQuantity(option.quantity)}
            />
            <span className={`option-products quantity-${option.quantity}`} aria-hidden="true">
              {Array.from({ length: option.quantity }, (_, index) => (
                <Image
                  key={index}
                  src="/images/praquel/producto-unidades.png"
                  alt=""
                  width={560}
                  height={560}
                  sizes="96px"
                  unoptimized
                />
              ))}
            </span>
            <span className="option-copy">
              <strong>{option.title}</strong>
              <small>{option.description}</small>
            </span>
            <span className="option-price"><strong>{option.price}</strong></span>
            <b>{option.badge}</b>
          </label>
        ))}
        <label className="subscription-option">
          <input type="checkbox" defaultChecked />
          <span>
            <strong>Suscríbete y ahorra un 25%</strong>
            <small>Entrega periódica · Omite o cancela cuando quieras</small>
          </span>
        </label>
      </div>
      <a className="checkout-button" href={selectedOption.checkout}>AÑADIR AL CARRITO · {selectedOption.price}</a>
    </div>
  );
}
