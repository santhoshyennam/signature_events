import React from "react";
import Alert from "react-bootstrap/Alert";

interface AlertViewProps {
  title: string;
  description: string;
  setShow: any;
  variant: string;
}

const AlertView: React.FC<AlertViewProps> = ({
  title,
  description,
  setShow,
  variant,
}) => {
  return (
    <Alert variant={variant} onClose={() => setShow("")} dismissible>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{description}</p>
    </Alert>
  );
};

export default AlertView;