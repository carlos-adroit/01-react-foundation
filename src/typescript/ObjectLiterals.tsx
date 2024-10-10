interface Person {
    fullName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}


export const ObjectLiterals = () => {
    const person: Person = {
        age: 25,
        fullName: "",
        lastName: '',
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }

  return (
    <div>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </div>
  )
}