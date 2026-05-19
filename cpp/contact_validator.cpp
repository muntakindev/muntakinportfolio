#include <iostream>
#include <regex>

bool isValidEmail(const std::string &email) {
    const std::regex pattern(R"(([^@\s]+@[^@\s]+\.[^@\s]+))");
    return std::regex_match(email, pattern);
}

int main() {
    std::string email = "takinmun@gmail.com";
    std::cout << "Validating contact data...\n";
    std::cout << "Email: " << email << " -> " << (isValidEmail(email) ? "valid" : "invalid") << "\n";
    return 0;
}
