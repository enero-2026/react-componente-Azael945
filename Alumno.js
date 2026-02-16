import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Alumno({ nombre, matricula }) {

  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.card}>

      <View style={styles.row}>

        {/* Círculo tipo foto */}
        <View style={styles.avatar} />

        {/* Nombre */}
        <Text style={styles.nombre}>{nombre}</Text>

        {/* Botón */}
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setMostrar(!mostrar)}
        >
          <Text style={styles.textoBoton}>
            {mostrar ? "Ocultar" : "Mostrar"}
          </Text>
        </TouchableOpacity>

      </View>

      {mostrar && (
        <Text style={styles.matricula}>
          Matrícula: {matricula}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#adb5bd',
    marginRight: 10,
  },

  nombre: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
  },

  boton: {
    backgroundColor: '#003049',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  matricula: {
    marginTop: 10,
    fontSize: 14,
  }
});
