function cekkoin(jumlah, koin) 
{
 if (jumlah === 0) 
  {
     return [];
   } 
 else
   {
     if (jumlah >= koin[0]) 
       {
        total = (jumlah - koin[0]);
        return [koin[0]].concat(cekkoin(total, koin));
        } 
      else
        {
         koin.shift();
         return cekkoin(jumlah,koin);
        }
    }
} 
console.log(cekkoin(49, [25, 10, 5,1]));
console.log(cekkoin(31, [25, 10, 5,1]));
console.log(cekkoin(50, [25, 10, 5,1]));