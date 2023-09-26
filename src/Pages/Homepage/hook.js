import { useState, useEffect } from 'react';


export default function Hook(props) {
  const [condition, setCondition] = useState(0);
  const [conditions, setConditions] = useState([]);
  const [bodyType, setBodyType] = useState(0);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [transmissionType, setTransmissionType] = useState(0);
  const [transmissionTypes, setTransmissionTypes] = useState([]);
  const [engineType, setEngineType] = useState(0);
  const [engineTypes, setEngineTypes] = useState([]);
  const [origin, setOrigin] = useState(0);
  const [origins, setOrigins] = useState([]);
  const [customClass, setCustomClass] = useState(false);

  useEffect(() => {
    setConditions(props.carCondition);
    setBodyTypes(props.bodyType);
    setTransmissionTypes(props.tranmissionType);
    setEngineTypes(props.engineType);
    setOrigins(props.origin);
  }, [])

  const handleSubmit = () => {
    setCustomClass(true);
    setTimeout(() => {
      setCustomClass(false);
      window.location.href = "/in-progress?condition="+condition+"&bodyType="+bodyType+"&tranmissionType="+transmissionType+"&engineType="+engineType+"&origin="+origin;
    }, 6000)
  }
  return {
    condition,
    conditions,
    setCondition,
    bodyType,
    bodyTypes,
    setBodyType,
    transmissionType,
    transmissionTypes,
    setTransmissionType,
    engineType,
    engineTypes,
    setEngineType,
    origin,
    origins,
    setOrigin,
    handleSubmit,
    customClass,
  }
}
