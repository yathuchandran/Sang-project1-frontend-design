export function createData(id, name, calories, fat, carbs, protein) {
    return {
      id,
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  
  const rows = [
    createData(1, 'string ', 'string123', 0.0, 0.0, 'false'),
    createData(2, 'string ', 'string123', 0.0, 0.0, 'false'),
    createData(3, 'Eclair', 262,  0.0, 0.0, 'false'),
    createData(4, 'Frozen yoghurt', 159,  0.0, 0.0, 'false'),
    createData(5, 'Gingerbread', 356,  0.0, 0.0, 'false'),
    createData(6, 'Honeycomb', 408,  0.0, 0.0, 'false'),
    createData(7, 'Ice cream sandwich', 237,  0.0, 0.0, 'false'),
    createData(8, 'Jelly Bean', 375,  0.0, 0.0, 'false'),
    createData(9, 'KitKat', 518, 0.0, 0.0, 'false'),
    createData(10, 'Lollipop', 392, 0.0, 0.0, 'false'),
    createData(11, 'Marshmallow', 318,  0.0, 0.0, 'false'),
    createData(12, 'Nougat', 360,  0.0, 0.0, 'false'),
    createData(13, 'Oreo', 437,  0.0, 0.0, 'false'),
  ];