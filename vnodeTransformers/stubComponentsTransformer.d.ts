import type { VTUVNodeTypeTransformer } from "./util";
import { Teleport, VNodeTypes, ConcreteComponent, DefineComponent } from "vue";
import { Stubs } from "../types";
export declare type CustomCreateStub = (params: {
  name: string;
  component: ConcreteComponent;
}) => ConcreteComponent;
interface StubOptions {
  name: string;
  type?: VNodeTypes | typeof Teleport;
  renderStubDefaultSlot?: boolean;
}
export declare const registerStub: ({
  source,
  stub,
  originalStub,
}: {
  source: ConcreteComponent;
  stub: ConcreteComponent;
  originalStub?:
    | ConcreteComponent<
        {},
        any,
        any,
        import("vue").ComputedOptions,
        import("vue").MethodOptions
      >
    | undefined;
}) => void;
export declare const getOriginalVNodeTypeFromStub: (
  type: ConcreteComponent
) => VNodeTypes | undefined;
export declare const getOriginalStubFromSpecializedStub: (
  type: ConcreteComponent
) => VNodeTypes | undefined;
export declare const addToDoNotStubComponents: (
  type: ConcreteComponent
) => WeakSet<
  ConcreteComponent<
    {},
    any,
    any,
    import("vue").ComputedOptions,
    import("vue").MethodOptions
  >
>;
export declare const createStub: ({
  name,
  type,
  renderStubDefaultSlot,
}: StubOptions) => DefineComponent;
interface CreateStubComponentsTransformerConfig {
  stubs?: Stubs;
  shallow?: boolean;
  renderStubDefaultSlot: boolean;
}
export declare function createStubComponentsTransformer({
  stubs,
  shallow,
  renderStubDefaultSlot,
}: CreateStubComponentsTransformerConfig): VTUVNodeTypeTransformer;
export {};
