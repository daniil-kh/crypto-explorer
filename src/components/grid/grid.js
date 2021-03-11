import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Grid = ({
  headerData,
  data,
  numOfRows,
  renderHeaderItem,
  renderItem,
  keyExtractor,
  style,
  cellContainerStyle,
}) => {
  const splitArrayIntoRows = (array, numOfRows) => {
    let result_array = [];
    const chunkSize = Math.round(array.length / numOfRows);
    for (
      let element_counter = 0;
      element_counter < array.length;
      element_counter += chunkSize
    ) {
      result_array.push(
        array.slice(element_counter, element_counter + chunkSize),
      );
    }

    return result_array;
  };

  const renderRow = (data) => {
    return (
      <View style={styles.row}>
        {data.map((item) => (
          <View
            style={[styles.cell, cellContainerStyle]}
            key={keyExtractor(item)}>
            {renderItem(item)}
          </View>
        ))}
      </View>
    );
  };

  const result_array = splitArrayIntoRows(data, numOfRows);

  return (
    <View style={style}>
      {headerData?.length > 0 && (
        <View style={styles.row}>
          {headerData.map((item) => (
            <View
              key={keyExtractor(item)}
              style={[styles.cell, cellContainerStyle]}>
              {renderHeaderItem(item)}
            </View>
          ))}
        </View>
      )}
      {result_array.map((row) => renderRow(row))}
    </View>
  );
};

export default Grid;
