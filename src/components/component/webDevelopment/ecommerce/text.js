import React from "react";
import styled from "styled-components";

import { TXT_CONSTANTS } from "../../../../globalStyles/constants";

const Text = () => {
  return (
    <>
      <Wrapper>
        <Title>E-Commerce Photography Website</Title>
        <Paragraph>
          Fully responsive e-commerce application with a functioning store,
          cart, payment, order confirmation, and admin CRUD features.
        </Paragraph>
        <Paragraph>
          The store offers a variety of images that can be bought in different
          sizes and types of paper. Each cart is saved on a MongoDB database and
          can be retrieved using a unique ID assigned to each user's local
          storage. The payment system was created using Stripe. On payment, the
          user is redirected to the order confirmation page if the payment
          succeeds or to an error page if the payment fails.
        </Paragraph>
        <Paragraph>
          The administrator portal gives the admin the possibility to create,
          update, and delete products. The portal is protected with a login
          portal that uses Bcrypt and Json Web Token to secure the user's
          authentication. If logged out, the admin can't access protected routes
          and perform protected actions. While logged in, the user can see every
          order made to the website and modify their status (received,
          processing, fulfilled, etc.).
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>Technologies used:</ParagraphStrong> React,
          JavaScript, Redux, Node.js, CSS, MongoDB, Stripe, Email.js,
          Cloudinary, Bcrypt, Json Web Tokens
        </Paragraph>
        <Paragraph>
          <ParagraphStrong>GitHub repository</ParagraphStrong>
        </Paragraph>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: hidden;
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.top};
  max-width: ${TXT_CONSTANTS.maxWidth};
  margin: ${TXT_CONSTANTS.margin};
  font-weight: ${TXT_CONSTANTS.fontWeight};
  color: ${TXT_CONSTANTS.color};
`;

const Title = styled.h2`
  margin-top: ${TXT_CONSTANTS.marginTop};
  font-weight: ${TXT_CONSTANTS.fontWeightTitle};
  text-transform: ${TXT_CONSTANTS.textTransform};
  font-size: ${TXT_CONSTANTS.fontWeightStrong};
`;

const Paragraph = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
`;

const ParagraphStrong = styled.span`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
`;

export default Text;
