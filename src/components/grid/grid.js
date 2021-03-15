import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const Grid = ({
  headerData,
  data,
  numOfColumns,
  renderHeaderItem,
  renderItem,
  keyExtractor,
  style,
  cellContainerStyle,
}) => {
  const splitArrayIntoRows = (array, numOfColumns) => {
    let result_array = [];
    const chunkSize = numOfColumns ? numOfColumns : 1;
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
      <View
        style={styles.row}
        key={keyExtractor(data[0]) + keyExtractor(data[1])}>
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

  const result_array = splitArrayIntoRows(data, numOfColumns);

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
