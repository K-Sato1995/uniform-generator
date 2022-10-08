import React, { Component } from 'react'
// import Dropzone from 'react-dropzone'
// import csv from 'csvtojson'
import Papa from 'papaparse'

export default class CSVDropzone extends Component {
  state = {
    files: []
  }

  render () {
    return (
        <div className="dropzone">
          {/* <Dropzone
            onDrop={this.onDrop.bind(this)}
            multiple={false}
          >
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone> */}
       <input
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
              }
            }
            )
          }
        }}
      />
        </div>
    )
  }
}
