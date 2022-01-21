export const  treeList =  {
  title: '00000',  
  key: '0' ,
  level:'level1',
  open: true,
  child:[  
      {
        title: '0-111111', 
        key: '0-0',
        level:'level2',
        open: true,
        child:[  
            {  
              title: '0-1-1111', 
              key: '0-0-0',
              level:'level3',    
            }, 
            {  
              title: '0-1-2222', 
              key: '0-0-1',
              level:'level3',
              open: true,
              child: [
                  {  
                  title: '0-1-2-11111', 
                  key: '0-0-1-0',
                  level:'level4',
                  open: true,
                  child: [
                      {  
                      title: '0-1-2-1-111', 
                      key: '0-0-1-0-0',
                      level:'level5',
                    }
                  ]
                }
              ]
            },
            {  
              title: '0-1-33333', 
              key: '0-0-4',
              level:'level3',
            }, 
        ]
      },
      {
        title: '0-222222', 
        key: '0-2',
        level:'level2',
        open: false,
        child: [
          {
            title: '0-2-1111', 
            key: '0-2-0',
            level:'level3',
          },
          {
            title: '0-2-22222', 
            key: '0-2-1',
            level:'level3',
          },
          {
            title: '0-2-33333', 
            key: '0-2-2',
            level:'level3',
          }
        ]
        }
    ]
}
