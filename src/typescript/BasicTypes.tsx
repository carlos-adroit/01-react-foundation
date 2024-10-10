export function BasicTypes() {
  const name: string = 'Carlos';
  const age: number = 25;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? 'true':'false'}
      <br />
      {powers.join(', ')}
    </>
  )
}
