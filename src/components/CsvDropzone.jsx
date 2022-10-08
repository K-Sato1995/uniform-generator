import React from 'react'
// import Dropzone from 'react-dropzone'
// import csv from 'csvtojson'
import Papa from 'papaparse'

const CSVDropzone = (props) => {
  const { onDrop } = props
  //   const [files, setFiles] = useState([])

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
                onDrop(results.data)
              }
            }
            )
          }
        }}
      />
        </div>
  )
}

export default CSVDropzone
