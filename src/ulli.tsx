interface liintext {
  liintext: string;
}

const Inlist: React.FC<liintext> = ({ liintext }) => {
  return (
    <ul>
      <li>{liintext}</li>
    </ul>
  );
};

export default Inlist;
