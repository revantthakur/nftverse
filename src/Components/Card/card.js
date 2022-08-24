// import Card from "react-bootstrap/Card";

// export default function CardComponent(props) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={props.coverImageUrl} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

import Card from "react-bootstrap/Card";

export default function CardComponent(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.coverImageUrl} width="100px" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
