type Constructor<T, TA = unknown> = new(...args: TA[]) => T;
type ExtendTypeWith<T extends Constructor<any>, OtherObject extends object> = Constructor<InstanceType<T> & OtherObject, ConstructorParameters<T>>;
type Dictionary<TYPE> = {[key: string]: TYPE};