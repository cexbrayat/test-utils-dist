import { ConcreteComponent, transformVNodeArgs } from "vue";
declare type VNodeArgsTransformerFn = NonNullable<
  Parameters<typeof transformVNodeArgs>[0]
>;
declare type TransformVNodeArgs = Parameters<VNodeArgsTransformerFn>;
declare type VNodeTransformerArgsType = TransformVNodeArgs[0];
declare type InstanceArgsType = TransformVNodeArgs[1];
declare type VNodeTransformerInputType = VNodeTransformerArgsType[0];
declare type VNodeTransformerInputComponentType = VNodeTransformerInputType &
  ConcreteComponent;
export declare type VTUVNodeTypeTransformer = (
  inputType: VNodeTransformerInputComponentType,
  instance: InstanceArgsType
) => VNodeTransformerInputComponentType;
export declare const createVNodeTransformer: ({
  transformers,
}: {
  transformers: VTUVNodeTypeTransformer[];
}) => VNodeArgsTransformerFn;
export {};
