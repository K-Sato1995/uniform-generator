import React from 'react'
import Papa from 'papaparse'
import styles from './csv-dropzone.module.css'

const CSVDropzone = (props) => {
  const { onDrop } = props

  return (
    <input
        className={styles.dropbtn}
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files
          console.log(files)
          if (files) {
            console.log(files[0])
            Papa.parse(files[0], {
              complete: function (results) {
                console.log('Finished:', results.data)
                onDrop(results.data)
              }
            }
            )
          }
        }}
    />
  )
}

export default CSVDropzone
