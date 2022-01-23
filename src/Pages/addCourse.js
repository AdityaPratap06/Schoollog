import React, { useState } from 'react';
import MaterialTable from 'material-table'
import { filter } from '@chakra-ui/react';
import { Box } from '@material-ui/core';

function AddCourse() {
    const [data,setData]=useState([
        {name:"Full Stack",number:"13241",status:"active",date:"09-12-2021"},
        {name:"React.js",number:"13242",status:"active",date:"09-12-2021"},
        {name:"Angular.js",number:"13243",status:"active",date:"09-12-2021"},
        {name:"Next.js",number:"13244",status:"active",date:"09-12-2021"},
        {name:"Node.js",number:"13245",status:"active",date:"09-12-2021"},
    ])
    const columns=[
        {title:"Name",field:"name",filterPlaceholder:"Filter by Name"},
        {title:"Refrence_id",field:"number",filterPlaceholder:"Filter by Refrence_id"},
        {title:"Status",field:"status",filterPlaceholder:"Filter by Status"},
        {title:"CreatedAt",field:"date",filterPlaceholder:"Filter by Date"},
    
    ]
  return (
      <>
    <Box width="100%" >
      <MaterialTable title="Material Table" 
    //   editable={
    //      { onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
    //          setData([...data,newRow])
    //          resolve()
    //   setTimeout(()=>resolve(),500)

    //      }),
    //     onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
    //         console.log(newRow,oldRow)
    //         const updatedData=[...data]
    //         updatedData[oldRow.data.id]=newRow
    //         setData(updatedData)
    //         setTimeout(()=>resolve(),500)
    //     })}
    //   }
      data={data}
      columns={columns}
      options={{
        //   saerch:false
        paging:true,
        pageSizeOptions:[5,10,20,25,50,100],
        pageSize:7,
            // paginationType:"stepped", 
        filtering:true,
        exportButton:true,
        exportAllData:true,
        actionsColumnIndex:-1
      }}
      title="Courses"
      />
      </Box>
      </>
  );
}

export default AddCourse;