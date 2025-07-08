export const Language_Versions = {
    c: "10.2.0",
    cpp: "10.2.0",
    java: "15.0.2",
    python: "3.10.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    csharp: "6.12.0",
    php: "8.2.3",
    go: "1.16.2",
    haskell: "9.0.1",
    ruby: "3.0.1",
};

export const Code_Snippets = {
    javascript: 'function greet() {\n   console.log("Hello World!");\n}\ngreet();\n',
    typescript: 'function greet(name: string): void {\n   console.log(`Hello, ${name}!`);\n}\ngreet("World");',
    python: 'def greet(): \n    print("Hello, World!") \ngreet() ',
    java: 'public class Main {\n   public static void main(String[] args) {\n      System.out.println("Hello, World!");\n }\n }',
    csharp: 'using System; \n   class Program {\n      static void Main(string[] args) {\n         Console.WriteLine("Hello, World!");\n}\n} ',
    php: '<?php \n   function greet() {\n      echo "Hello, World!"; \n} \ngreet(); \n?> ',
    go: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}',
    ruby: 'def greet\n  puts "Hello, World!"\nend\ngreet',
    c: '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}',
    cpp: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}',
    haskell: 'main :: IO ()\nmain = putStrLn "Hello, World!"'
};