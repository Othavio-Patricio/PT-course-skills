const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
   return names.reduce((acc, curr) => acc + curr.toLowerCase().split('')
   .reduce((count, current) => current === 'a' ? count + 1 : count, 0), 0);
  }
  console.log(containsA());