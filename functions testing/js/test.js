const NullSafe = x => {
    const isNullSafe = y => y && y.then;
    const maywrap = y => isNullSafe(y) ? y : NullSafe(y); 
    return {
       then: fn => {
           const result = x !== null ? fn(x) : null;
           return maywrap(result);
       }
    }
};

NullSafe(1).then(console.log);                   // will call the log
NullSafe(null).then(console.log);                // will not call the log
NullSafe(2).then(x => null).then(console.log);   // will not call the log
